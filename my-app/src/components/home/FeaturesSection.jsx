import { featuresData } from "../../data/featureDatas";

const FeaturesSection = () => {
  return (
    <section class="border-t">
      <div class="max-w-7xl mx-auto px-6 py-10">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">

          {featuresData.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                class="flex items-center gap-3"
              >
                {/* <Icon class="w-8 h-8" /> */}

                <img src={item.icon} alt="" />

                <div>
                  <h4 class="font-semibold text-sm">
                    {item.title}
                  </h4>
                  <p class="text-xs text-gray-500">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
