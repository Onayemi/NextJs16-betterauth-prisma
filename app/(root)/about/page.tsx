import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import { generateMetadata } from "@/lib/metadata";

export const metadata = generateMetadata({
  title: "About Us",
  description: "Learn more about Recipes.com and our mission to share great food.",
  path: "/about",
  image: "https://recipes.com/images/about-og.jpg",
  keywords: ["chocolate cake", "dessert", "baking"],
});

const AboutPage = () => {
    return ( 
        <h1 className="text-5xl">About Page</h1> 
     );
}
 
export default AboutPage;