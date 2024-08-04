import { HTMLSVGProps } from "../../types"
import * as S from "./elements"


export const Icon = ({path,xmlns,viewBox,...props}:HTMLSVGProps)=>{
    return <S.Icon {...props} xmlns={xmlns} viewBox="0 0 24 24">
            <path 
        d={path}
        // stroke={props.stroke}
        // strokeWidth={props.strokeWidth}
        // strokeLinecap={props.strokeLinecap}
        // strokeLinejoin={props.strokeLinejoin}
      />
        </S.Icon>
}
//may used icon without path or xmlns and then render it at the certain button