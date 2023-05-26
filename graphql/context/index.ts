import { NextRequest } from 'next/server';
import PrismaClient from "~/prisma/client";
import { CustomContext } from '~/graphql/index.d';

const initContext = () => {
    return async (req: NextRequest) => {
        const ctx: CustomContext = {
            req,
            prisma: PrismaClient,
        };
        return ctx;
    };
};

export default initContext;