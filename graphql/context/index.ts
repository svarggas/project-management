import { NextRequest } from 'next/server';
import { prisma } from "~/prisma/client";
import { CustomContext } from '~/graphql/index.d';

const initContext = () => {
    return async (req: NextRequest) => {
        const ctx: CustomContext = {
            req,
            prisma,
        };
        return ctx;
    };
};

export default initContext;