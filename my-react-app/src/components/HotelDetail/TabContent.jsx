import React from 'react'

const TabContent = ({ id, currentTab, children }) => {
    return (
        currentTab === id ? <div className="tab-content">
            {children}
        </div>
            : null
    );

}

export default TabContent
