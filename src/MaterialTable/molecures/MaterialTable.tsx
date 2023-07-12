/** @jsxImportSource @emotion/react */
import { Table } from '../atom/Table';
import { MATERIALDUMMY_MAIN, MATERIALDUMMY_SUB } from '../../constants/MaterialDummy';
import MaterialDropdown from './MaterialDropdown';
import Label from '../atom/Label';
import { Dropdown } from '../atom/Dropdown';


export default function MaterialTable(){
    return(
        <>
            <Table.Wrapper>
                <Table.Title>
                    <Label css={titleText}>자재 선택*</Label>
                </Table.Title>
                <Label css={describeText}>제작하고자 하는 신발의 자재를 분류별로 빠짐없이 선택해주세요</Label>
                <Table.TableBody css={tableBody}>
                    {
                        MATERIALDUMMY_MAIN.map(function(mainData){
                            return(
                                <Table.MainCell css={mainCell}>
                                    <Label css={labelMainData}>{ mainData.label }</Label>
                                    <Table.SubCell>
                                        {
                                            MATERIALDUMMY_SUB.filter(item => item.in === mainData.id).map(function(subData){
                                                return(
                                                    <Table.AtomCell css={atomCell}>
                                                        <Label css={labelSubData}>
                                                            { subData.label }
                                                        </Label>
                                                        <MaterialDropdown css={materialDropdown} category={subData.category}/>
                                                    </Table.AtomCell>
                                                );
                                            })
                                        }
                                    </Table.SubCell>
                                </Table.MainCell>
                            );
                        })
                    }
                </Table.TableBody>
            </Table.Wrapper>
        </>
    );
}

const textStyleBold = {
    fontWeight : "bold",
    fontSize : "16px",
}

const titleText = {
    fontSize: "1.25rem",
    fontWeight: "800",
    marginBottom : "16px",
}

const describeText = {
    marginBottom : "16px",
}

const tableBody = {
    borderTop : "1px solid black",
    borderLeft : "1px solid #cfcfcf",
    borderRight : "1px solid #cfcfcf",
    width : "1060px",
    height : "auto",
}

const mainCell = {
    display : "grid",
    gridTemplateColumns : "16fr 94fr",
    borderBottom : "1px solid #cfcfcf"
}

const flexCentering = {
    display : "flex",
    justifyContent : "center",
    alignItems : "center",
}

const labelMainData = {
    background : "#f6f6f6",
    ...flexCentering,
    ...textStyleBold,
}

const labelSubData = {
    ...flexCentering,
    ...textStyleBold,
}

const atomCell = {
    borderBottom : "1px solid #cfcfcf",
    display : "grid",
    gridTemplateColumns : "16fr 94fr",
    paddingTop : "12px",
    paddingBottom : "12px",
}

const materialDropdown = {
    display : "flex",
    alignItems : "center",
}


