import React from 'react';
import StayContainer from '../Stay/StayContainer';

const MainContainer = () => {
    return (
        <main>
            <div className="header-stays-content">
                <div className="header-stays-content-title">

                </div>
                <div className="header-stays-content-number">

                </div>
            </div>
            <div className="stays-content">
            {/* foreach list of stays */}
                <StayContainer>

                </StayContainer>
            </div>
        </main>
    );
};

export default MainContainer;