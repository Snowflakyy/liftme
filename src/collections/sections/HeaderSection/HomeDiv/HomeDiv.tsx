import * as S from "./elements"
import AvatarJane from "../../../../public/images/Avatars/Avatar1.png"
export const HomeDiv =({...props})=>{
    return <S.HomeDiv>
        <S.Container>
            <S.HeadingDiv>
                <S.Heading>A new home for your fitness journey.</S.Heading>
            </S.HeadingDiv>
            <S.BodyDiv>
                <S.Body>Donec vitae mi vulputate, suscipit urna in,
                     malesuada nisl, ellentesque laoreet pretium.</S.Body>
                     <S.Button variant="primary" iconPath="M4.16602 9.99999H15.8327M15.8327 9.99999L9.99935 4.16666M15.8327 9.99999L9.99935 15.8333"></S.Button>
            </S.BodyDiv>
            <S.DescDiv>
                <S.Description >Trusted by 100k+ people</S.Description>
                <S.Avatar src="../../../../public/images/Avatars/Avatar1.png"/>
            </S.DescDiv>
        </S.Container>
    </S.HomeDiv>
}