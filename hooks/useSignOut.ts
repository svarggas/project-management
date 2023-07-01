import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { useClerk } from "@clerk/nextjs";

import { AppDispatch } from '~/redux/store';
import { signOut } from '~/redux/features/userSlice';

const useSignOut = () => {

    const { signOut: signOutClerk } = useClerk();
    const { push } = useRouter();
    const dispatch = useDispatch<AppDispatch>();

    return () => {
        dispatch(signOut());
        signOutClerk();
        push('/');
    }
};

export default useSignOut;