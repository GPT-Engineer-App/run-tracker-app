import { useState } from "react";
import {
  Container,
  VStack,
  HStack,
  Input,
  Textarea,
  Button,
  Text,
  Box,
  List,
  ListItem,
  Heading,
  FormControl,
  FormLabel,
  useColorModeValue,
} from "@chakra-ui/react";

const Index = () => {
  const [runs, setRuns] = useState([]);
  const [time, setTime] = useState("");
  const [distance, setDistance] = useState("");
  const [feelings, setFeelings] = useState("");

  const handleAddRun = () => {
    const newRun = { time, distance, feelings };
    setRuns([...runs, newRun]);
    setTime("");
    setDistance("");
    setFeelings("");
  };

  const bg = useColorModeValue("white", "gray.700");
  const color = useColorModeValue("black", "white");

  return (
    <Container centerContent maxW="container.md" py={10} bg={bg} color={color}>
      <VStack spacing={6} width="100%">
        <Heading as="h1" size="xl" mb={6}>
          Running Tracker
        </Heading>
        <VStack as="form" spacing={4} width="100%">
          <FormControl id="time">
            <FormLabel>Time</FormLabel>
            <Input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </FormControl>
          <FormControl id="distance">
            <FormLabel>Distance (km)</FormLabel>
            <Input
              type="number"
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
            />
          </FormControl>
          <FormControl id="feelings">
            <FormLabel>Feelings</FormLabel>
            <Textarea
              value={feelings}
              onChange={(e) => setFeelings(e.target.value)}
            />
          </FormControl>
          <Button colorScheme="blue" onClick={handleAddRun}>
            Add Run
          </Button>
        </VStack>
        <Box width="100%">
          <Heading as="h2" size="lg" mb={4}>
            Tracked Runs
          </Heading>
          <List spacing={3}>
            {runs.map((run, index) => (
              <ListItem key={index} p={4} borderWidth="1px" borderRadius="md">
                <Text><strong>Time:</strong> {run.time}</Text>
                <Text><strong>Distance:</strong> {run.distance} km</Text>
                <Text><strong>Feelings:</strong> {run.feelings}</Text>
              </ListItem>
            ))}
          </List>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;