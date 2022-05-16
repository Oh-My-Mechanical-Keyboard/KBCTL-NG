function importDefinition(
    props: Props,
    file: File,
    setErrors: (errors: string[]) => void
) {
    const reader = new FileReader();
    reader.onload = async () => {
        let res;
        try {
            res = JSON.parse(reader.result.toString());
            const isValid = isKeyboardDefinitionV2(res) || isVIADefinitionV2(res);
            if (isValid) {
                setErrors([]);
                const definition = isVIADefinitionV2(res)
                    ? res
                    : keyboardDefinitionV2ToVIADefinitionV2(res);
                props.loadDefinition(definition);
                const keyboards = getDevicesUsingDefinitions(props.allDefinitions);
                props.validateDevices(
                    keyboards.filter(
                        device =>
                            res.vendorProductId !==
                            getVendorProductId(device.vendorId, device.productId)
                    )
                );
                props.selectDevice(null);
                props.reloadConnectedDevices();
            } else {
                setErrors(
                    (isKeyboardDefinitionV2.errors || isVIADefinitionV2.errors).map(
                        e => `${e.dataPath ? e.dataPath + ': ' : 'Object: '}${e.message}`
                    )
                );
            }
        } catch (err) {
            setErrors([`${err.name}: ${err.message}`]);
        }
    };
    reader.readAsBinaryString(file);
}
function onDrop(evt, props: Props, setErrors: (errors: string[]) => void) {
    evt.preventDefault();
    if (evt.dataTransfer.items) {
        // Use DataTransferItemList interface to access the file(s)
        for (var i = 0; i < evt.dataTransfer.items.length; i++) {
            // If dropped items aren't files, reject them
            if (
                evt.dataTransfer.items[i].kind === 'file' &&
                evt.dataTransfer.items[i].type === 'application/json'
            ) {
                var file = evt.dataTransfer.items[i].getAsFile();
                importDefinition(props, file, setErrors);
            }
        }
    }
}

