import { Button, FlexColumn, FlexRow, VerticalGap } from "styles/globals";
import ProgressBarComponent from "./progressBar";

const ProfileSkills = () => {
    return (
        <FlexColumn style={{
            scrollbarWidth: 'none',
            overflowY: 'scroll',
        }}>
            <VerticalGap gap={10} />
            <Button style={{ marginLeft: 'auto' }}>Add Skill</Button>

            <VerticalGap gap={10} />
            <h3>Typescript</h3>
            <FlexRow style={{ alignItems: 'center' }}>
                <ProgressBarComponent progress={70} />
                <span style={{ fontSize: '1em', marginLeft: 10 }}>70%</span>
            </FlexRow>

            <VerticalGap gap={10} />
            <h3>Python</h3>
            <FlexRow style={{ alignItems: 'center' }}>
                <ProgressBarComponent progress={16} />
                <span style={{ fontSize: '1em', marginLeft: 10 }}>16%</span>
            </FlexRow>

            <VerticalGap gap={10} />
            <h3>Java</h3>
            <FlexRow style={{ alignItems: 'center' }}>
                <ProgressBarComponent progress={90} />
                <span style={{ fontSize: '1em', marginLeft: 10 }}>90%</span>
            </FlexRow>

            <VerticalGap gap={10} />
            <h3>GoLang</h3>
            <FlexRow style={{ alignItems: 'center' }}>
                <ProgressBarComponent progress={48} />
                <span style={{ fontSize: '1em', marginLeft: 10 }}>48%</span>
            </FlexRow>

            <VerticalGap gap={10} />
            <h3>GoLang</h3>
            <FlexRow style={{ alignItems: 'center' }}>
                <ProgressBarComponent progress={48} />
                <span style={{ fontSize: '1em', marginLeft: 10 }}>48%</span>
            </FlexRow>

            <VerticalGap gap={10} />
            <h3>GoLang</h3>
            <FlexRow style={{ alignItems: 'center' }}>
                <ProgressBarComponent progress={48} />
                <span style={{ fontSize: '1em', marginLeft: 10 }}>48%</span>
            </FlexRow>

            <VerticalGap gap={10} />
            <h3>GoLang</h3>
            <FlexRow style={{ alignItems: 'center' }}>
                <ProgressBarComponent progress={48} />
                <span style={{ fontSize: '1em', marginLeft: 10 }}>48%</span>
            </FlexRow>
        </FlexColumn>
    );
};

export default ProfileSkills;