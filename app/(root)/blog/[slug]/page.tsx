import NotFound from '@/app/not-found';
import React from 'react'

async function getRecipe(slug: string) {
  // --- Example: Replace this with your actual DB call ---
  const res = await fetch(`https://api.recipes.com/recipes/${slug}`, {
    next: { revalidate: 60 }, // ISR
  });
  if (!res.ok) return null;
  return res.json();
}

// 🧠 Next.js dynamic metadata
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const recipe = await getRecipe(params.slug);

  if (!recipe) {
    return generateMetadata({
      title: "Recipe Not Found",
      description: "This recipe could not be found.",
      path: `/recipes/${params.slug}`,
    });
  }

  return generateMetadata({
    title: recipe.title,
    description: recipe.description || "A delicious recipe from Recipes.com.",
    image: recipe.image || "https://recipes.com/default-recipe.jpg",
    path: `/recipes/${params.slug}`,
    keywords: recipe.tags || ["recipe", "food", "cooking"],
  });
}

const SingleDetails = async ({ params }: { params: { slug: string } }) => {
    const recipe = await getRecipe(params.slug);
  if (!recipe) return <NotFound />

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="my-4 rounded-2xl" />
      <p>{recipe.description}</p>
    </main>
  )
}

export default SingleDetails