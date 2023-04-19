import '../../../dist/outsystemsui.js';

export default {
    title: 'Patterns/Molecules/CardSectioned',
    argTypes: {
        imagePadding: { control: { type: 'boolean' } },
        orientation: { control: 'select', options: ['vertical', 'horizontal'] },
    },
    parameters: {
        componentSubtitle: 'Groups information in a small block, organized in different sections for title, image and content that is easily noticed in the screen.',
    },
};

const Template = ({ imagePadding, orientation }) => {

    let height = orientation === 'vertical' ? '250px' : '100%';
    let width = orientation === 'vertical' ? '400px' : '600px';

    return `<osui-card-sectioned style="width: ${width}" image-padding=${imagePadding} orientation=${orientation}>
            <img style="height:${height}" width="400px" slot="image" src="https://outsystemsui.outsystems.com/OutSystemsUIWebsite/img/StyleGuidePreviewAssets.PatternPreviewPhoto10.png" alt="">
            <p slot="title">Hire our personal small price</p>
            <p slot="content">Take control with a loan made for you. Access your loan information whenever you need it, we developed tools to give you freedom to focus on the most important things.</p>
            <footer slot="bottom"><a href="#">Simulate Loan</a></footer>
            </osui-card-sectioned>`
};

export const Basic = Template.bind({});
Basic.args = {
    imagePadding: false,
    orientation: 'vertical',
};