
import type { Language } from "../../contexts/LanguageContext";
import { financialLeaseSolutionPost } from "./invest-solutions/finace-leasing";
import { investmentSolutionPost } from "./invest-solutions/invesment-solution";
import { roofLeasingService } from "./invest-solutions/roof-leasing";
import { salesExecutiveJobPostEN, salesExecutiveJobPostJP, salesExecutiveJobPostVN } from "./jobs";
import { allNewsPostsByLanguage } from "./news";
import { allProjectPosts } from "./projects";
import { epcServicePost } from "./wataco-service/epc-service";
import { ppaModelPost } from "./wataco-service/ppa-model";
import { watacoServicePost } from "./wataco-service/wataco-service";
import { escoModelPost } from "./why-solar/esco-model";
import { ourServicesPost } from "./why-solar/our-services";
import { strategicPartnershipPost } from "./why-solar/strategic-partnership";
import { whySolarPost } from "./why-solar/why-solar";

// Helper to convert array to slug-mapped object
const allProjectPostsMap = allProjectPosts.reduce((acc, post) => {
    acc[post.slug] = post;
    return acc;
}, {} as Record<string, any>);

const staticPosts = {
    [whySolarPost.slug]: whySolarPost,
    [ourServicesPost.slug]: ourServicesPost,

    [escoModelPost.slug]: escoModelPost,
    [roofLeasingService.slug]: roofLeasingService,
    [investmentSolutionPost.slug]: investmentSolutionPost,
    [financialLeaseSolutionPost.slug]: financialLeaseSolutionPost,

    [ppaModelPost.slug]: ppaModelPost,
    [strategicPartnershipPost.slug]: strategicPartnershipPost,
    [watacoServicePost.slug]: watacoServicePost,
    ...allProjectPostsMap,
    [epcServicePost.slug]: epcServicePost,
};

export const contentDatabaseByLanguage: Record<Language, Record<string, any>> = {
    VN: {
        ...staticPosts,
        [salesExecutiveJobPostVN.slug]: salesExecutiveJobPostVN,
        ...allNewsPostsByLanguage.VN.reduce((acc, post) => {
            acc[post.slug] = post;
            return acc;
        }, {} as Record<string, any>)
    },
    EN: {
        [salesExecutiveJobPostEN.slug]: salesExecutiveJobPostEN,
        ...staticPosts,
        ...allNewsPostsByLanguage.EN.reduce((acc, post) => {
            acc[post.slug] = post;
            return acc;
        }, {} as Record<string, any>)
    },
    JP: {
        [salesExecutiveJobPostJP.slug]: salesExecutiveJobPostJP,
        ...staticPosts,
        ...allNewsPostsByLanguage.JP.reduce((acc, post) => {
            acc[post.slug] = post;
            return acc;
        }, {} as Record<string, any>)
    }
};

// For backward compatibility (defaulting to VN)
export const contentDatabase = contentDatabaseByLanguage.VN;
