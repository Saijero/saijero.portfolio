import { createContext, useContext, useState } from 'react';

const ClickCountContext = createContext();

export const useClickCount = () => {
    return useContext(ClickCountContext);
};

export const ClickCountProvider = ({ children }) => {
    const [homeClickCount, setHomeClickCount] = useState(0);

    const incrementHomeClickCount = () => {
        if (homeClickCount < 1) {
            setHomeClickCount(homeClickCount + 1);
        }
    };

    const decrementHomeClickCount = () => {
        if (homeClickCount > 0) {
            setHomeClickCount(homeClickCount - 1);
        }
    }

    return (
        <ClickCountContext.Provider
            value={{
                homeClickCount,
                incrementHomeClickCount,
                decrementHomeClickCount,
            }}
        >
            {children}
        </ClickCountContext.Provider>
    );
};
