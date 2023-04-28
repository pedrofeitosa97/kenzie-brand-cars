import styled from "styled-components";

export const StyledHeaderMain = styled.div`
height: 80%;
width: 100%;
overflow: hidden;
position: relative;

img {
    width: 800px;
    height: auto;
    object-fit: cover;
    margin-left: -260px;
}

.img_title {
    position: absolute;
    top: 20%;
    left: 50%;
    color: white;
    transform: translate(-50%, -50%);
    padding: 10px;
    border-radius: 5px;
    font-size: 18px;
    font-weight: bold;
}

.img_content {
    position: absolute;
    color: white;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px;
    border-radius: 5px;
    font-size: 18px;
    font-weight: bold;
    width: 350px;
    text-align: center;
}

@media (min-width: 800px) {
    img {
        width: 120%;
        height: 580px;
    }

    .img_title {
        position: absolute;
        top: 20%;
        left: 50%;
        color: white;
        transform: translate(-50%, -50%);
        padding: 10px;
        border-radius: 5px;
        font-weight: bold;
        font-size: 36px;
    }
    
    .img_content {
        position: absolute;
        color: white;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 10px;
        border-radius: 5px;
        font-weight: bold;
        text-align: center;
        font-size: 36px;
        width: 100%;
    }

}
`