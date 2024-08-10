import { getDetailPost } from "@/app/services/detailsPost";

export const generateMetadata = async ({ params }) => {
  const detailsPost = await getDetailPost(params?.id);
  return {
    title: `${detailsPost?.title}`,
    description: `${detailsPost?.body}`,
    keywords: detailsPost?.body.split(" "),
  };
};

const DetailsPage = async ({ params }) => {
  const detailsPost = await getDetailPost(params?.id);
  return (
    <div className="min-h-screen bg-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            {detailsPost.title}
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            {detailsPost.body}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
