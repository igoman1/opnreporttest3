import BarChart from "./../components/BarChart";
import Card from "./../components/Card";
import CompIndex from "./../layout/CompIndex";
import Cover from "./../layout/Cover";
import NewHospitalList from "../layout/NewHospitalList";
import OldHospitalList from "../layout/OldHospitalList";
import KeyNumber3x1Comp from "./../layout/KeyNumber3x1Comp";
// 경쟁분석 section
import React from "react";
import SectionThreeBody from "../layout/SectionThreeBody";

const Section3 = (props) => {
    const sectionHeader = {
        sectionTitle: "경쟁 분석",
        sectionList: [
            "의원 매출액 분포 (최근 12개월 평균)",
            "의원별 점유율과 경쟁 지표",
            "신규 의원 목록 (최근 24개월 간)",
            "폐업 의원 목록 (최근 24개월 간)",
        ],
    };
    // console.log(props.input)

    return (
        <>
            <div>
                <Cover fileName="Cover3.png" sectionHeader={sectionHeader} />
            </div>
            <div id="section-3">
                <KeyNumber3x1Comp input={props.input} />
                <SectionThreeBody input={props.input} />
                <Card>
                    <BarChart
                        chartName="의원 매출액 분포 (최근 1년간 월평균)"
                        chartUnit="만원"
                        chartNote="상위 10개 의원만 표시 중"
                        input={props.input.hospital_profit_distribution_chart}
                    />
                </Card>
                <Card>
                    <CompIndex input={props.input} />
                </Card>
                <NewHospitalList
                    listTitle="신규 의원 목록 (최근24개월 간)"
                    list={props.input.new_hospital_table}
                />
                <OldHospitalList
                    listTitle="폐업 의원 목록 (최근24개월 간)"
                    list={props.input.closed_hospital_table}
                />
            </div>
        </>
    );
};

export default React.memo(Section3);
