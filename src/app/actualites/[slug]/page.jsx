import SingActualteClient from "@/components/clients/SingleActualiteClient"
import { fetchPost } from "@/lib/utils";

export default function PostPage() {
  return <SingActualteClient />
}



export async function generateMetadata({ params }) {
  const {data, error} = await fetchPost(params.slug);
  if(!error)
    return {
      title: `${data.titre}`,
      description:  "Lisez notre article pour en savoir plus.",
    };
  else 
   return {
    title: "404 Non trouvé",
    description: ""
  }
}