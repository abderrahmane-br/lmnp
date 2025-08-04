"use client";
import { useState, useRef, useEffect } from 'react';
import styles from '@/styles/components/ChatUI.module.scss';
import { SEND } from '../icons';
import { Icon } from '@iconify/react';

export default function ChatUI({chatID}) {
  const [messages, setMessages] = useState([
    { role: 'system', content: `Tu es un assistant intelligent spécialisé en investissement locatif meublé (LMNP).
Ton rôle est de renseigner les visiteurs du site lmnp-conseils.immo de manière claire, pédagogique et engageante.
Tu réponds aux questions fréquentes sur :
Le fonctionnement du LMNP
Les avantages fiscaux (amortissement, non-imposition des loyers, etc.)
Les investissements accessibles dès 120 €/mois
Le financement, la gestion locative, les régimes fiscaux (réel, micro-BIC)
Le profil type des investisseurs (salarié, retraité, jeunes actifs, etc.)
Et tu peux également proposer des simulations gratuites pour estimer les mensualités, la rentabilité ou les économies d’impôts.
Ton ton est professionnel, clair et rassurant. Tu simplifies les concepts et restes accessible, même pour les débutants.
🧠 Important :
Si tu constates que tu ne disposes pas de toutes les informations nécessaires pour répondre de manière précise (ex : prix d’un bien, localisation, situation personnelle du prospect, stratégie fiscale…), oriente le visiteur vers un conseiller humain seulement si c’est pertinent dans le contexte.
Voici le message que tu peux proposer avec naturel et bienveillance :
"Pour vous apporter une réponse plus précise, il me faudrait des informations complémentaires que seul un conseiller peut prendre en compte (prix d’un bien, zone géographique, stratégie fiscale adaptée…). Je peux vous proposer un rappel gratuit par un expert LMNP, au moment de votre choix, avec une simulation personnalisée à la clé. Souhaitez-vous réserver un créneau ?
C’est gratuit, rapide et sans engagement."` },
  ]);

  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [allowSending, setAllowSending] = useState(false);
  const chat = useRef(null);

  

  console.log(chatID)

  const scrollToBottom = () => {
    if (chat.current)
      chat.current.scrollTop = chat.current?.scrollHeight;
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (!loading && input.trim())
    setAllowSending(true);
  else
    setAllowSending(false);
  }, [loading, input])

  const handleSend = async () => {
    if (!allowSending) return;

    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);
    setAllowSending(false);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatID, messages: newMessages }),
      });

      const data = await res.json();

      if (data.message) {
        setMessages(msgs => [...msgs, { role: 'assistant', content: data.message }]);
      } else {
        setMessages(msgs => [...msgs, { role: 'assistant', content: 'Error: No response received.' }]);
      }
    } catch (err) {
      console.error('Client error:', err);
      setMessages(msgs => [...msgs, { role: 'assistant', content: 'Error: Failed to fetch response.' }]);
    } finally {
      setLoading(false);
      setAllowSending(true)
    }
  };

  return (
    <div className={styles.chatContainer}>
      <h1>Chattez avec notre assistant IA</h1>
      <div className={styles.chatBox} ref={chat}>
        <p className={`${styles.message} ${styles.assistant}`}>
          Bonjour, je suis l'assistant intelligent de LMNP Conseils. Je suis là pour répondre à vos questions courantes sur le statut de Loueur meublé non professionnel. Quelle est votre demande ?
        </p>
        {messages
          .filter(msg => msg.role !== 'system')
          .map((msg, i) => (
            <div
              key={i}
              className={`${styles.message} ${msg.role === 'user' ? styles.user : styles.assistant}`}
            >
              {msg.content}
            </div>
          ))}
        {loading && <div className={`${styles.loading}`}>
            <div className={`${styles.typing}`}>
                <div className={`${styles.dot}`}></div>
                <div className={`${styles.dot}`}></div>
                <div className={`${styles.dot}`}></div>
            </div>
        </div>}
      </div>

      <div className={styles.inputContainer}>
        <input
          type="text"
          name="message"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Ecrivez votre message..."
          onKeyDown={e => e.key === 'Enter' && handleSend()}
          className={`${styles.input}`}
        />
        {/* <button onClick={handleSend} disabled={loading} className={`${styles.button}`}>
          Send
        </button> */}
        <Icon icon={SEND} onClick={handleSend} className={`${styles.button} ${!allowSending && styles.disabled}`} />
      </div>
    </div>
  );
}
