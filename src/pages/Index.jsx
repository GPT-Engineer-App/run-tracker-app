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
  Alert,
  AlertIcon,
} from "@chakra-ui/react";

const Index = () => {
  const [runs, setRuns] = useState([]);
  const [time, setTime] = useState("");
  const [distance, setDistance] = useState("");
  const [feelings, setFeelings] = useState("");
  const [advice, setAdvice] = useState("");

  const handleAddRun = () => {
    const newRun = { time, distance, feelings };
    setRuns([...runs, newRun]);
    setTime("");
    setDistance("");
    setFeelings("");
  };

  const calculateAdvice = () => {
    if (runs.length === 0) {
      setAdvice("Please add some runs to get training advice.");
      return;
    }

    let totalDistance = 0;
    runs.forEach(run => {
      totalDistance += parseFloat(run.distance);
    });

    const averageDistance = totalDistance / runs.length;

    let adviceMessage = "Based on your tracked runs, here are some training tips:\n";
    adviceMessage += `1. Your average run distance is ${averageDistance.toFixed(2)} km. To train for longer runs, gradually increase your distance by 10% each week.\n`;
    adviceMessage += "2. Incorporate rest days into your training schedule to allow your body to recover.\n";
    adviceMessage += "3. Include strength training exercises to build endurance and prevent injuries.\n";
    adviceMessage += "4. Stay hydrated and maintain a balanced diet to support your training.\n";
    adviceMessage += "5. Listen to your body and adjust your training intensity as needed.";

    setAdvice(adviceMessage);
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
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
        <Button colorScheme="green" onClick={calculateAdvice}>
          Get Training Advice
        </Button>
        {advice && (
          <Alert status="info" mt={4}>
            <AlertIcon />
            <Text whiteSpace="pre-wrap">{advice}</Text>
          </Alert>
        )}
      </VStack>
    </Container>
  );
};

export default Index;