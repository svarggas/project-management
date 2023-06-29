import { NextRequest } from 'next/server';
import { useUser } from '@clerk/nextjs';
import { prisma } from "~/prisma/client";
import { CustomContext } from '~/graphql/index.d';

const initContext = () => {
    return async (req: NextRequest) => {
        const { user } = useUser();
        const ctx: CustomContext = {
            req,
            prisma,
            user,
        };
        return ctx;
    };
};

export default initContext;