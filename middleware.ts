import {clerkMiddleware, createRouteMatcher} from "@clerk/nextjs/server";


const isPublicRoutes =  createRouteMatcher(['/',
    '/api/clerk-webhook',
    '/api/drive-activity/notification',
    '/api/payment/success',
    '/sign-in(.*)',
    '/sign-up(.*)'
])

export default clerkMiddleware(async (auth,request) =>{
    if(!isPublicRoutes(request)){
        await auth.protect();

    }
});

export const config = {
    matcher: [

        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',

        '/(api|trpc)(.*)',
    ],
};