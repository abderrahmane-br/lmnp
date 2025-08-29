// "use client";

// import { useEffect } from "react";
// import "vanilla-cookieconsent/dist/cookieconsent.css";
// import * as CookieConsent from "vanilla-cookieconsent";

// // import styles from "./CookieConsent.module.scss"; // ton SCSS module

// export default function CookieConsentBanner() {
//   useEffect(() => {
//     // cookieconsent-config.js

//         const CAT_NECESSARY = "necessary";
//         const CAT_ANALYTICS = "analytics";
//         const CAT_ADVERTISEMENT = "advertisement";

//         const SERVICE_AD_STORAGE = 'ad_storage'
//         const SERVICE_AD_USER_DATA = 'ad_user_data'
//         const SERVICE_AD_PERSONALIZATION = 'ad_personalization'
//         const SERVICE_ANALYTICS_STORAGE = 'analytics_storage'

//         // Define dataLayer and the gtag function.
//         window.dataLayer = window.dataLayer || [];
//         function gtag(){dataLayer.push(arguments);}

//         // Set default consent to 'denied' (this should happen before changing any other dataLayer)
//         gtag('consent', 'default', {
//             [SERVICE_AD_STORAGE]: 'denied',
//             [SERVICE_AD_USER_DATA]: 'denied',
//             [SERVICE_AD_PERSONALIZATION]: 'denied',
//             [SERVICE_ANALYTICS_STORAGE]: 'denied',

//         });

//         /** 
//          * Update gtag consent according to the users choices made in CookieConsent UI
//          */
//         function updateGtagConsent() {
//             gtag('consent', 'update', {
//                 [SERVICE_ANALYTICS_STORAGE]: CookieConsent.acceptedService(SERVICE_ANALYTICS_STORAGE, CAT_ANALYTICS) ? 'granted' : 'denied',
//                 [SERVICE_AD_STORAGE]: CookieConsent.acceptedService(SERVICE_AD_STORAGE, CAT_ADVERTISEMENT) ? 'granted' : 'denied',
//                 [SERVICE_AD_USER_DATA]: CookieConsent.acceptedService(SERVICE_AD_USER_DATA, CAT_ADVERTISEMENT) ? 'granted' : 'denied',
//             });
//         }

//         CookieConsent.run({
//             // See: https://cookieconsent.orestbida.com/reference/configuration-reference.html#guioptions
//             // ...
            
//             // Trigger consent update when user choices change
//             onFirstConsent: () => {
//                 updateGtagConsent();
//             },
//             onConsent: () => {
//                 updateGtagConsent();
//             },
//             onChange: () => {
//                 updateGtagConsent();
//             },

//             // Configure categories and services
//             categories: {
//                 [CAT_NECESSARY]: {
//                     enabled: true,  // this category is enabled by default
//                     readOnly: true,  // this category cannot be disabled
//                 },
//                 [CAT_ANALYTICS]: {
//                     autoClear: {
//                         cookies: [
//                             {
//                                 name: /^_ga/,   // regex: match all cookies starting with '_ga'
//                             },
//                             {
//                                 name: '_gid',   // string: exact cookie name
//                             }
//                         ]
//                     },
//                     // See: https://cookieconsent.orestbida.com/reference/configuration-reference.html#category-services
//                     services: {
//                         [SERVICE_ANALYTICS_STORAGE]: {
//                             label: 'Enables storage (such as cookies) related to analytics e.g. visit duration.',
//                         }
//                     }
//                 },
//                 [CAT_ADVERTISEMENT]: {
//                     services: {
//                         [SERVICE_AD_STORAGE]: {
//                             label: 'Enables storage (such as cookies) related to advertising.',
//                         },
//                         [SERVICE_AD_USER_DATA]: {
//                             label: 'Sets consent for sending user data related to advertising to Google.',
//                         },
//                         [SERVICE_AD_PERSONALIZATION]: {
//                             label: 'Sets consent for personalized advertising.',
//                         },
//                     }
//                 },
//             },

//             language: {
//                 default: 'en',
//                 translations: {
//                     en: {
//                         // See: https://support.google.com/tagmanager/answer/10718549?hl=en
//                         consentModal: {
//                             title: 'We use cookies',
//                             description: 'This website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent.',
//                             acceptAllBtn: 'Accept all',
//                             acceptNecessaryBtn: 'Reject all',
//                             showPreferencesBtn: 'Manage Individual preferences'
//                         },
//                         preferencesModal: {
//                             title: 'Manage cookie preferences',
//                             acceptAllBtn: 'Accept all',
//                             acceptNecessaryBtn: 'Reject all',
//                             savePreferencesBtn: 'Accept current selection',
//                             closeIconLabel: 'Close modal',
//                             sections: [
//                                 {
//                                     title: "Cookie usage",
//                                     description: "We use cookies to ensure the basic functionalities of the website and to enhance your online experience."
//                                 },
//                                 {
//                                     title: "Strictly necessary cookies",
//                                     description: "These cookies are essential for the proper functioning of the website, for example for user authentication.",
//                                     linkedCategory: CAT_NECESSARY,
//                                 },
//                                 {
//                                     title: "Analytics",
//                                     description: 'Cookies used for analytics help collect data that allows services to understand how users interact with a particular service. These insights allow services both to improve content and to build better features that improve the user’s experience.',
//                                     linkedCategory: CAT_ANALYTICS,
//                                     cookieTable: {
//                                         headers: {
//                                             name: "Name",
//                                             domain: "Service",
//                                             description: "Description",
//                                             expiration: "Expiration"
//                                         },
//                                         body: [
//                                             {
//                                                 name: "_ga",
//                                                 domain: "Google Analytics",
//                                                 description: "Cookie set by <a href=\"https://business.safety.google/adscookies/\">Google Analytics</a>",
//                                                 expiration: "Expires after 12 days"
//                                             },
//                                             {
//                                                 name: "_gid",
//                                                 domain: "Google Analytics",
//                                                 description: "Cookie set by <a href=\"https://business.safety.google/adscookies/\">Google Analytics</a>",
//                                                 expiration: "Session"
//                                             }
//                                         ]
//                                     }
//                                 },
//                                 {
//                                     title: 'Advertising',
//                                     description: 'Google uses cookies for advertising, including serving and rendering ads, personalizing ads (depending on your ad settings at <a href=\"https://g.co/adsettings\">g.co/adsettings</a>), limiting the number of times an ad is shown to a user, muting ads you have chosen to stop seeing, and measuring the effectiveness of ads.',
//                                     linkedCategory: CAT_ADVERTISEMENT,
//                                 },
//                                 {
//                                     title: 'More information',
//                                     description: 'For any queries in relation to the policy on cookies and your choices, please <a href="https://www.example.com/contacts">contact us</a>.'
//                                 }
//                             ]
//                         }
//                     }
//                 }
//             }
//         });
//   }, []);

//   return null; // ce composant ne rend rien, il initialise seulement
// }


"use client";

import { useEffect } from "react";
import "vanilla-cookieconsent/dist/cookieconsent.css";
import * as CookieConsent from "vanilla-cookieconsent";

export default function CookieConsentBanner() {
  useEffect(() => {
    const CAT_NECESSARY = "necessary";
    const CAT_ANALYTICS = "analytics";
    const CAT_ADVERTISEMENT = "advertisement";

    const SERVICE_AD_STORAGE = "ad_storage";
    const SERVICE_ANALYTICS_STORAGE = "analytics_storage";

    // Initialisation du dataLayer et gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }

    // Par défaut → tout en "denied"
    gtag("consent", "default", {
      [SERVICE_AD_STORAGE]: "denied",
      [SERVICE_ANALYTICS_STORAGE]: "denied",
    });

    // Mise à jour selon les choix de l'utilisateur
    function updateGtagConsent() {
      gtag("consent", "update", {
        [SERVICE_ANALYTICS_STORAGE]: CookieConsent.acceptedService(
          SERVICE_ANALYTICS_STORAGE,
          CAT_ANALYTICS
        )
          ? "granted"
          : "denied",
        [SERVICE_AD_STORAGE]: CookieConsent.acceptedService(
          SERVICE_AD_STORAGE,
          CAT_ADVERTISEMENT
        )
          ? "granted"
          : "denied",
      });
      window.dataLayer.push({event: "consent_update"})
    }

    CookieConsent.run({
      onFirstConsent: updateGtagConsent,
      onConsent: updateGtagConsent,
      onChange: updateGtagConsent,

      categories: {
        [CAT_NECESSARY]: {
          enabled: true,
          readOnly: true,
        },
        [CAT_ANALYTICS]: {
          autoClear: {
            cookies: [
              { name: /^_ga/ },
              { name: "_gid" },
            ],
          },
          services: {
            [SERVICE_ANALYTICS_STORAGE]: {
              label:
                "Active le stockage (cookies) lié à l’analyse, comme la durée des visites.",
            },
          },
        },
        [CAT_ADVERTISEMENT]: {
          services: {
            [SERVICE_AD_STORAGE]: {
              label:
                "Active le stockage (cookies) lié aux annonces Google (non personnalisées).",
            },
          },
        },
      },

      language: {
        default: "fr",
        translations: {
          fr: {
            consentModal: {
              title: "Nous utilisons des cookies",
              description:
                "Ce site utilise des cookies essentiels pour fonctionner correctement, ainsi que des cookies analytiques et publicitaires. Ces derniers ne seront activés qu’après votre consentement.",
              acceptAllBtn: "Tout accepter",
              acceptNecessaryBtn: "Tout refuser",
              showPreferencesBtn: "Gérer les préférences",
            },
            preferencesModal: {
              title: "Gestion des cookies",
              acceptAllBtn: "Tout accepter",
              acceptNecessaryBtn: "Tout refuser",
              savePreferencesBtn: "Enregistrer mes choix",
              closeIconLabel: "Fermer",
              sections: [
                {
                  title: "Utilisation des cookies",
                  description:
                    "Nous utilisons des cookies pour assurer le bon fonctionnement du site et améliorer votre expérience.",
                },
                {
                  title: "Cookies nécessaires",
                  description:
                    "Ces cookies sont indispensables au fonctionnement du site.",
                  linkedCategory: CAT_NECESSARY,
                },
                {
                  title: "Analytics",
                  description:
                    "Ces cookies nous permettent de mesurer l’audience et de comprendre comment les visiteurs interagissent avec le site.",
                  linkedCategory: CAT_ANALYTICS,
                },
                {
                  title: "Publicité (non personnalisée)",
                  description:
                    "Google Ads utilise des cookies pour diffuser des annonces non personnalisées et mesurer leur efficacité.",
                  linkedCategory: CAT_ADVERTISEMENT,
                },
                // {
                //   title: "Plus d’informations",
                //   description:
                //     'Pour toute question, veuillez <a href="/contact">nous contacter</a>.',
                // },
              ],
            },
          },
        },
      },
    });
  }, []);

  return null;
}
