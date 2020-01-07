import React from 'react';

import SecurityControlsModal from '../SecurityControlsModal';
import SecurityControlsItem from '../SecurityControlsItem';

describe('features/classification/security-controls/SecurityControlsModal', () => {
    let wrapper;
    let modalItems;

    const getWrapper = props =>
        shallow(
            <SecurityControlsModal
                closeModal={jest.fn()}
                definition="classification definition"
                classificationName="internal"
                isSecurityControlsModalOpen={false}
                itemName="welcome.pdf"
                modalItems={modalItems}
                {...props}
            />,
        );

    beforeEach(() => {
        modalItems = [
            { id: 'msg1', defaultMessage: 'message1' },
            { id: 'msg2', defaultMessage: 'message2' },
        ];
        wrapper = getWrapper();
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    test('should render a SecurityControlsModal', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should render with correct number of security controls items', () => {
        modalItems = [
            { id: 'msg1', defaultMessage: 'message1' },
            { id: 'msg2', defaultMessage: 'message2' },
            { id: 'msg3', defaultMessage: 'message3' },
        ];
        wrapper.setProps({ modalItems });
        expect(wrapper.find(SecurityControlsItem)).toHaveLength(3);
    });
});
