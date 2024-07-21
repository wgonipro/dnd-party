import {
    Card,
    CardHeader,
    CardBody,
    Stack,
    StackDivider,
    Heading,
    Text,
    Box,
    Button
} from '@chakra-ui/react';

export default function Overview() {
    return (
        <Card>
            <CardHeader>
                <Heading size='md'>Overview</Heading>
            </CardHeader>

            <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                    <Box>
                        <Heading size='sm'>Gold</Heading>
                        <Text>0</Text>
                        <Button>+</Button>
                        <Button>-</Button>
                    </Box>
                </Stack>
            </CardBody>
        </Card>
    );
}
