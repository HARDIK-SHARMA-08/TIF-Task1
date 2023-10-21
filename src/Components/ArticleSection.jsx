import React, { useState } from "react";

const ArticleSection = () => {
  const items = [
    {
      photo: "https://c.animaapp.com/SU6FwElQ/img/grilled-tomatoes-1-846x846-1-1@2x.png",
      name: "Grilled Tomatoes at Home",
      description:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
    {
      photo: "https://c.animaapp.com/SU6FwElQ/img/meal-prep-ideas-846x846-1-3@2x.png",
      name: "Snacks for Travel",
      description:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
    {
      photo: "https://c.animaapp.com/SU6FwElQ/img/meal-prep-ideas-846x846-1-2@2x.png",
      name: "Post-workout Recipes",
      description:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
    {
      photo: "https://c.animaapp.com/SU6FwElQ/img/grilled-tomatoes-1-846x846-1@2x.png",
      name: "How To Grill Corn",
      description:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
    {
      photo: "https://c.animaapp.com/SU6FwElQ/img/meal-prep-ideas-846x846-1-1@2x.png",
      name: "Crunchwrap Supreme",
      description:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
    {
      photo: "https://c.animaapp.com/SU6FwElQ/img/meal-prep-ideas-846x846-1@2x.png",
      name: "Broccoli Cheese Soup",
      description:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
  ];
  const itemsPerPage = 3; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage % totalPages) + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(
      (prevPage) => ((prevPage - 2 + totalPages) % totalPages) + 1
    );
  };

  const displayedItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="mx-[52px] mb-[52px] mt-[132px] lg:mx-[100px] lg:mt-[158px] lg:mb-[64px] flex flex-col">
      <div className="text-center lg:text-left [font-family:'Poppins',Helvetica] font-semibold text-primary text-[28px] lg:text-[56px] tracking-[0] leading-[27px] whitespace-nowrap text-[#0d2268]">
        Latest Articles
      </div>
      <div className="flex flex-col lg:flex-row w-full justify-between justify-center mt-[23px] gap-[61px] lg:mt-[81px]">
        {displayedItems.map((item, index) => (
          <div
            key={index}
            className=" w-[271px] h-[440px] lg:w-[381px] lg:h-[520px] border border-[1.37px] rounded-[20px]"
          >
            <img src={item.photo} alt="" className="bg-black  h-[166px] lg:w-[326px] lg:h-[257px] m-[27px] items-cen rounded-[20px]" />
            <div className="text-center lg:text-left lg:mx-[42px] lg:h-[42px]">
              <div className="text-[20px] lg:text-[21px] font-bold mb-[14px]">{item.name}</div>
              <p className="text-[12px] text-justify mx-[30px] lg:mx-0 lg:text-[15px]">{item.description}</p>
              <button className="border border-[1px] rounded-full mt-[27px] py-[8px] px-[26px]  lg:text-[16px]">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center flex-row gap-[14px] justify-center mt-[65px]">
        <button onClick={handlePrevPage} className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="29"
            viewBox="0 0 28 29"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.4419 22.8523C18.9949 22.5393 19.1753 21.7427 18.8083 21.234C18.706 21.0921 17.1257 19.6312 15.2964 17.9875L11.9704 14.999L15.2973 12.0101C17.127 10.3662 18.7074 8.90503 18.8093 8.76312C18.9289 8.59653 18.9947 8.35683 18.9951 8.08643C18.9956 7.71445 18.9549 7.6306 18.6296 7.33388C18.2955 7.02916 18.2193 7 17.7585 7H17.2535L13.1268 10.7639L9 14.5277V14.959C9 15.2142 9.06299 15.4772 9.15418 15.6029C9.37757 15.9112 16.5225 22.452 16.9588 22.7478C17.3877 23.0386 18.0326 23.084 18.4419 22.8523Z"
              fill="#424961"
            />
            <rect
              x="0.5"
              y="0.5"
              width="27"
              height="28"
              rx="4.5"
              stroke="#424961"
            />
          </svg>
        </button>
        <div className="lg:text-[22px] text-center">
          {currentPage} / {totalPages}
        </div>
        <button onClick={handleNextPage}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="29"
            viewBox="0 0 28 29"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.55811 7.1477C9.00514 7.46068 8.82474 8.25727 9.19166 8.766C9.29397 8.9079 10.8743 10.3688 12.7036 12.0125L16.0296 15.001L12.7027 17.9899C10.873 19.6338 9.29256 21.095 9.19072 21.2369C9.07115 21.4035 9.00533 21.6432 9.00495 21.9136C9.00438 22.2855 9.04512 22.3694 9.37036 22.6661C9.70446 22.9708 9.78065 23 10.2415 23H10.7465L14.8732 19.2361L19 15.4723V15.041C19 14.7858 18.937 14.5228 18.8458 14.3971C18.6224 14.0888 11.4775 7.54798 11.0412 7.2522C10.6123 6.96142 9.96737 6.916 9.55811 7.1477Z"
              fill="#424961"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.55811 7.1477C9.00514 7.46068 8.82474 8.25727 9.19166 8.766C9.29397 8.9079 10.8743 10.3688 12.7036 12.0125L16.0296 15.001L12.7027 17.9899C10.873 19.6338 9.29256 21.095 9.19072 21.2369C9.07115 21.4035 9.00533 21.6432 9.00495 21.9136C9.00438 22.2855 9.04512 22.3694 9.37036 22.6661C9.70446 22.9708 9.78065 23 10.2415 23H10.7465L14.8732 19.2361L19 15.4723V15.041C19 14.7858 18.937 14.5228 18.8458 14.3971C18.6224 14.0888 11.4775 7.54798 11.0412 7.2522C10.6123 6.96142 9.96737 6.916 9.55811 7.1477Z"
              fill="#424961"
            />
            <rect
              x="0.5"
              y="0.5"
              width="27"
              height="28"
              rx="4.5"
              stroke="#424961"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ArticleSection;
