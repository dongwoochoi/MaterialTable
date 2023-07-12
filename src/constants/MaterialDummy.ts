export const MATERIALDUMMY_MAIN = [
    {
        id : "upper",
        label : "갑피"
    },

    {
        id : "insole",
        label : "인솔"
    },

    {
         id : "outsole",
         label : "아웃솔",
    }
]

export const MATERIALDUMMY_SUB = [
    {
        id : "cover",
        in : "upper",
        label : "외피",
        category : ["천연가죽", "PU(합성피혁)", "캔버스", "매쉬", "니트", "극세사", "직기원단(나일론, 폴리 등)", "코디네이터와 상담 후 결정"]
    },

    {
        id : "lining",
        in : "upper",
        label : "내피",
        category : ["천연가죽", "PU(합성피혁)", "캔버스", "메쉬", "니트", "코디네이터와 상담 후 결정"]
    },
    
    {
        id : "upper_logo",
        in : "upper",
        label : "로고방식",
        category : ["인쇄", "라벨", "나염", "자수", "불박", "코디네이터와 상담 후 결정"]
    },
    
    {
        id : "material",
        in : "insole",
        label : "소재",
        category : ["오솔라이트", "코르크", "라텍스", "PU(합성피혁)", "EVA", "천연가죽", "코디네이터와 상담 후 결정"]
    },
    
    {
        id : "fabric",
        in : "insole",
        label : "원단",
        category : ["천연가죽", "PU(합성피혁)", "캔버스", "메쉬", "니트", "코디네이터와 상담 후 결정"]
    },
    
    {
        id : "insole_logo",
        in : "insole",
        label : "로고방식",
        category : ["인쇄", "라벨", "나염", "불박", "코디네이터와 상담 후 결정"]
    },
    
    {
        id : "shape",
        in : "outsole",
        label : "형태",
        category : ["운동화창", "구두창", "샌들 및 슬리퍼창", "특수창" ,"코디네이터와 상담 후 결정"]
    },
    
]