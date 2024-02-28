import { type FC } from 'react';
import { InfoBlockType } from '../../../utils/types';
import style from './InfoBlock.module.css';

export const InfoBlock: FC<InfoBlockType> = ({ title, blocks }) => {
    console.log(title);
    return (
        <div className={style.infoBlock}>
            <h2 className={style.infoBlock_title}>{title}</h2>
            {/* <div className={style.blocks}> */}
            {/*     {blocks.map((block) => ( */}
            {/*         <div className={style.block} key={block.id}> */}
            {/*             <div className={style.block_title}> */}
            {/*                 <img src={block.title.icon} alt={block.title.icon} /> */}
            {/*                 <h3 className={style.block_title_text}>{block.title.titleText}</h3> */}
            {/*             </div> */}
            {/*             /!* {block.icons && <div className={style.delivery_icons}></div>} *!/ */}
            {/*         </div> */}
            {/*     ))} */}
            {/* </div> */}
        </div>
    );
};
