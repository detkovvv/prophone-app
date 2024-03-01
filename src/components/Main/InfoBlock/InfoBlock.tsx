import { type FC, useState } from 'react';
import { InfoBlockType } from '../../../utils/types';
import style from './InfoBlock.module.css';

export const InfoBlock: FC<InfoBlockType> = ({ blocks, title }) => {
    const [openedIndex, setOpenedIndex] = useState<number | null>(null);

    const toggleBlock = (index: number) => {
        setOpenedIndex(openedIndex === index ? null : index);
    };

    return (
        <div className={style.infoBlock}>
            <h2 className={style.infoBlock_title}>{title}</h2>
            <div className={style.blocks}>
                {blocks.map((block, index) => (
                    <div className={style.block} key={block.id}>
                        <div className={style.block_title}>
                            <div className={style.title}>
                                <img src={block.title.icon} alt={block.title.icon} />
                                <h3 className={style.block_title_text}>{block.title.titleText}</h3>
                            </div>
                            <button
                                className={`${openedIndex === index ? style.button_opened : style.button_closed}`}
                                onClick={() => toggleBlock(index)}
                            >
                                <svg
                                    className={style.vector}
                                    width='14'
                                    height='14'
                                    viewBox='0 0 14 18'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M0.092774 17.1239L0.74673 17.8761C0.779774 17.9136 0.820099 17.9439 0.865227 17.9652C0.910355 17.9865 0.959334 17.9983 1.00916 17.9998C1.05898 18.0014 1.1086 17.9927 1.15496 17.9743C1.20132 17.9559 1.24345 17.9281 1.27876 17.8928L9.89102 9.21845C9.92554 9.18424 9.95295 9.14347 9.97166 9.09852C9.99036 9.05357 10 9.00533 10 8.9566C10 8.90787 9.99036 8.85963 9.97166 8.81468C9.95295 8.76973 9.92554 8.72897 9.89102 8.69476L1.30647 0.109573C1.23869 0.0404447 1.14646 0.00106489 1.04991 2.12365e-05C0.953358 -0.00102242 0.860312 0.0363557 0.791066 0.104003L0.126026 0.766972C0.05726 0.835112 0.0180864 0.927823 0.0170482 1.02488C0.0160101 1.12194 0.0531903 1.21548 0.120483 1.28509L7.45808 8.73933C7.52538 8.80894 7.56256 8.90247 7.56152 8.99953C7.56048 9.09659 7.52131 9.1893 7.45254 9.25744L0.109399 16.617C0.0423956 16.6832 0.00329482 16.7727 0.000199534 16.8671C-0.00289575 16.9615 0.0302525 17.0535 0.092774 17.1239Z'
                                        fill='#464646'
                                    />
                                </svg>
                            </button>
                        </div>
                        {openedIndex === index && (
                            <div>
                                {block?.icons && (
                                    <div className={style.delivery_icons}>
                                        {block?.icons.map((icon) => (
                                            <div key={icon.id}>
                                                <img src={icon.icon} alt={icon.icon} />
                                            </div>
                                        ))}
                                    </div>
                                )}
                                <div>
                                    <p className={style.description_text}>{block.description}</p>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};
