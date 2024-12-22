import { useState } from 'react';
import scss from './Tabs_content.module.scss';

const Tabs_content = () => {

    // const {isTab, setIsTab} = useState<number>(0);

    return (
        <section id={scss.Tabs_content}>
            <div className="container">
                <div className={scss.tabs}>
                    {Array.from({length: 5}, (_, i) => (
                        <button>
                            Tab {i + 1}
                        </button>
                    ))}
                </div>
                
            </div>
        </section>
    )
}

export default Tabs_content;