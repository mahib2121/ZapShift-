import React, { use } from 'react';
import { AuthContex } from '../contex/AuthContex';

const useAuth = () => {
    const authinfo = use(AuthContex)
    return authinfo
};

export default useAuth;