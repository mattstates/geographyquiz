import React from 'react';
export default (props) => {
    return (
        <div className="contentRow">
            {props.children}
            <style jsx>{`
				div.contentRow {
					display: flex;
					font-size: 14px;
					justify-content: space-between;
					margin: 0 auto;
					max-width: 500px;
                    min-height: 36px;
                    padding: 0 .5rem;
				}
			`}</style>
        </div>
    );
};
