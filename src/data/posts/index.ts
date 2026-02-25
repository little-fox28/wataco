import { solarDesignEngineerJobPost } from "./jobs";
import { thDalatMilkProjectPost } from "./projects/TH-TrueMilk";
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
};
