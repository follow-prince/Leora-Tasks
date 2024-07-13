import React, { lazy, Suspense } from "react";
const CardItems = React.memo(lazy(() => import("../components/CardItems")));

const TabProjects = () => {
  return (
    <div role="tablist" className="prince-tabs prince-tabs-lifted prince-p-2 ">
      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="prince-tab prince-font-bold prince-font-AppleFont"
        aria-label="All Projects"
        defaultChecked
      />
      <div
        role="tabpanel"
        className="prince-p-6 prince-tab-content prince-bg-base-100 prince-border-base-300 prince-rounded-box "
      >
        <Suspense
          fallback={
            <div>
              <span className="prince-loading prince-loading-ring prince-loading-lg"></span>
            </div>
          }
        >
          <CardItems />
        </Suspense>
      </div>

      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="prince-tab prince-font-bold prince-font-AppleFont"
        aria-label="Timeline"
      />
      <div
        role="tabpanel"
        className="prince-p-6 prince-tab-content prince-bg-base-100 prince-border-base-300 prince-rounded-box "
      >
        <div className="prince-font-extrabold ">Coming Soon !</div>
      </div>
    </div>
  );
};

const Content = () => {
  return (
    <div>
      <TabProjects />
    </div>
  );
};

export default Content;
