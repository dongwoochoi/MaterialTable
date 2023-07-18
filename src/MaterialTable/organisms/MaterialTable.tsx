/** @jsxImportSource @emotion/react */
import { Table } from '../atom/Table';
import { MATERIALDUMMY_MAIN, MATERIALDUMMY_SUB } from '../../constants/MaterialDummy';
import MaterialDropdown from '../molecures/MaterialDropdown';
import Label from '../atom/Label';
import { useEffect, useContext } from 'react';
import useResponsive from '../../useResponsive';
import { MaterialTableContext } from '../context';
import { selected } from '../store';
import useMaterialTable from './useMaterialTable';

export default function MaterialTable(){

    const { defaultValue } = useMaterialTable()
    const { isPc } = useResponsive();
    const { state, dispatch } = useContext(MaterialTableContext);
    useEffect(() => {
        dispatch({
            type : "reset",
            updateState : selected
        })
    }, [])
   
    return(
        <>
            <Table.Wrapper css={wrapper}>
                <Table.Title>
                    <Label css={titleText}>자재 선택*</Label>
                </Table.Title>
                <Label css={describeText}>제작하고자 하는 신발의 자재를 분류별로 빠짐없이 선택해주세요</Label>
                <Table.TableBody css={tableBody(isPc)}>
                    {
                        MATERIALDUMMY_MAIN.map(function(mainData){
                            return(
                                <Table.MainCell css={mainCell(isPc)}>
                                    <Label css={labelMainData(isPc)}>{ mainData.label }</Label>
                                    <Table.SubCell>
                                        {
                                            MATERIALDUMMY_SUB.filter(item => item.in === mainData.id).map(function(subData){
                                                return(
                                                    <Table.AtomCell css={atomCell(isPc)}>
                                                        <Label css={labelSubData(isPc)}>
                                                            { subData.label }
                                                        </Label>
                                                        <MaterialDropdown 
                                                            css={materialDropdown(isPc)} 
                                                            category={subData.category} 
                                                            defaultValue={defaultValue} 
                                                            mainkey={mainData.label} 
                                                            subkey={subData.label} 
                                                            />
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
const wrapper = {
    marginTop : "30px", 
    marginBottom : "30px"
}

const textStyleBold = {
    fontWeight : "bold",
    fontSize : "14px",
}

const titleText = {
    fontSize: "1.25rem",
    fontWeight: "800",
    marginBottom : "16px",
}

const describeText = {
    marginBottom : "16px",
}

const tableBody = (isPc : boolean) => ({
    borderTop : "1px solid black",
    borderLeft : "1px solid #cfcfcf",
    borderRight : "1px solid #cfcfcf",
    width : `${isPc ? "1060px" : "560px"}`,
    height : "auto",
})

const mainCell = (isPc : boolean) => ({
    display : "grid",
    gridTemplateColumns : `${isPc ? "16fr 94fr" : "none"}`,
    borderBottom : "1px solid #cfcfcf",
})

const flexCentering = {
    display : "flex",
    justifyContent : "center",
    alignItems : "center",
}

const labelMainData = (isPc : boolean) => ({
    background : "#f6f6f6",
    height : `${isPc ? "100%" : "47px"}`,
    ...flexCentering,
    ...textStyleBold,
})

const labelSubData = (isPc : boolean) => ({
    borderRight : `${isPc ? "none" : "1px solid #cfcfcf"}`,
    ...flexCentering,
    fontWeight : `${isPc ? "bold" : "none"}`,
    fontSize : "14px",
})

const atomCell = (isPc : boolean) => ({
    borderBottom : "1px solid #cfcfcf",
    display : "grid",
    gridTemplateColumns : `${isPc ? "16fr 94fr" : "3fr 8.3fr"}`,
    paddingTop : `${isPc ? "12px" : "0"}`,
    paddingBottom : `${isPc ? "12px" : "0"}`,
})

const materialDropdown = (isPc:boolean) => ({
    margin : `${isPc ? "0" : "6px"}`,
    display : "flex",
    alignItems : "center",
})

