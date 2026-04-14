import { financialLeaseSolutionPost } from "./invest-solutions/finace-leasing";
import { investmentSolutionPost } from "./invest-solutions/invesment-solution";
import { roofLeasingService } from "./invest-solutions/roof-leasing";
import { solarDesignEngineerJobPost } from "./jobs";
import { allNewsPosts } from "./news";
import { thDalatMilkProjectPost } from "./projects/TH-TrueMilk";
import { epcServicePost } from "./wataco-service/epc-service";
import { ppaModelPost } from "./wataco-service/ppa-model";
import { watacoServicePost } from "./wataco-service/wataco-service";
import { escoModelPost } from "./why-solar/esco-model";
import { ourServicesPost } from "./why-solar/our-services";
import { strategicPartnershipPost } from "./why-solar/strategic-partnership";
import { whySolarPost } from "./why-solar/why-solar";

// Helper to convert array to slug-mapped object
const newsPostsMap = allNewsPosts.reduce((acc, post) => {
    acc[post.slug] = post;
    return acc;
}, {} as Record<string, any>);

export const contentDatabase = {
    [whySolarPost.slug]: whySolarPost,
    [ourServicesPost.slug]: ourServicesPost,

    [escoModelPost.slug]: escoModelPost,
    [roofLeasingService.slug]: roofLeasingService,
    [investmentSolutionPost.slug]: investmentSolutionPost,
    [financialLeaseSolutionPost.slug]: financialLeaseSolutionPost,

    [ppaModelPost.slug]: ppaModelPost,
    [strategicPartnershipPost.slug]: strategicPartnershipPost,
    [watacoServicePost.slug]: watacoServicePost,
    [thDalatMilkProjectPost.slug]: thDalatMilkProjectPost,
    [solarDesignEngineerJobPost.slug]: solarDesignEngineerJobPost,
    [epcServicePost.slug]: epcServicePost,
    ...newsPostsMap
};
