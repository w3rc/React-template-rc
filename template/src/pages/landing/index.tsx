import React from 'react';
import { Buttons, Data, Freelancer, Recruiter, Section } from 'styles/landing/landing.styled';
import { motion } from 'framer-motion';
import { fadeLeft } from 'animations/landing';
import { useRouter } from 'hooks/useRouter';
import { useAppDispatch } from 'hooks/rtk';
import { setDefaultRoleAction } from 'store/slices/userSlice';
import { UserRole } from 'types/enums';

const LandingPage: React.FC = () => {

    const router = useRouter();
    const dispatch = useAppDispatch();

    return (
        <Section>
            <Data>
                <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >Welcome to</motion.h3>
                <motion.h1 variants={fadeLeft} initial='hidden' animate='visible' transition={{ duration: 1 }}>Work Hour</motion.h1>
                <p>A platform to recruit professionals and apply for a gig </p>
                <h4>Let's Get Started</h4>
                <Buttons>
                    <Recruiter
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95, backgroundColor: '#67F6E7', border: 'none', color: '#000' }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 1.5 } }}
                        onClick={() => {
                            dispatch(setDefaultRoleAction(UserRole.recruiter));
                            router.push('/auth');
                        }}
                    >I am a Recruiter</Recruiter>
                    <Freelancer
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95, backgroundColor: '#67F6E7', border: 'none', color: '#000' }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 1.5 } }}
                        onClick={() => {
                            dispatch(setDefaultRoleAction(UserRole.freelancer));
                            router.push('/auth');
                        }}
                    >I am a Freelancer</Freelancer>
                </Buttons>
            </Data>
        </Section >
    );
};

export default LandingPage;
