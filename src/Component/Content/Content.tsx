import React from 'react'
import cls from './Content.module.scss'
import { connect } from 'react-redux'
//@ts-ignore
import { AppStateType } from '../../Redux/redux-store'
import { TaglineType } from '../../Types'

type PropsType = {
    tagline: Array<TaglineType>
}

const Content: React.FC<PropsType> = (props) => {
    return (
        <div className={cls.main}>
            <div className={cls.mainleft}>
                <div className ={cls.advContainer}>
                    <div className={cls.advBlock}></div>
                    <div className={cls.advBt}>Начать путешествие</div>
                </div>
            </div>
            <div className={cls.mainRight}>
                {
                    props.tagline.map(item => {
                        return (
                            <div className={cls.taglineContainer} key={item.id}>
                                <div className={cls.taglineBlock}></div>
                                <div className={cls.taglineText}>
                                    <span>{item.string1}</span>
                                    <br />
                                    <span><b>{item.string2}</b></span>
                                    <br />
                                    <span>{item.string3}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

type MapStateToPropsType = {
    tagline: Array<TaglineType>
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        tagline: state.app.tagline
    }
}

export default connect(mapStateToProps, {})(Content)

