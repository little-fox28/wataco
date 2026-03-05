import { solarDesignEngineerJobPost } from "./jobs";
import { wataco_TH_SolarPost } from "./news";
import { thDalatMilkProjectPost } from "./projects/TH-TrueMilk";
import { epcServicePost } from "./wataco-service/epc-service";
import { watacoServicePost } from "./wataco-service/wataco-service";
import { escoModelPost } from "./why-solar/esco-model";
import { ourServicesPost } from "./why-solar/our-services";
import { strategicPartnershipPost } from "./why-solar/strategic-partnership";
import { whySolarPost } from "./why-solar/why-solar";


export const contentDatabase = {
    [whySolarPost.slug]: whySolarPost,
    [ourServicesPost.slug]: ourServicesPost,
    [escoModelPost.slug]: escoModelPost,
    [strategicPartnershipPost.slug]: strategicPartnershipPost,
    [watacoServicePost.slug]: watacoServicePost,
    [escoModelPost.slug]: escoModelPost,
    [thDalatMilkProjectPost.slug]: thDalatMilkProjectPost,
    [solarDesignEngineerJobPost.slug]: solarDesignEngineerJobPost,
    [epcServicePost.slug]: epcServicePost,
    [wataco_TH_SolarPost.slug]: wataco_TH_SolarPost
};
