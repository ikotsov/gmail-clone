import { LoremIpsum } from 'lorem-ipsum';

// This is a polyfill for nanoid and should be imported before it.
import 'react-native-get-random-values';
import { nanoid } from 'nanoid';

type Mail = {
  id: string;
  title: string;
  body: string;
};

const loremIpsumGenerator = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

const MAIL_COUNT = 100;

const DATA = Array(MAIL_COUNT).map<Mail>(() => ({
  id: nanoid(),
  title: loremIpsumGenerator.generateWords(),
  body: loremIpsumGenerator.generateSentences()
}));

export default DATA;
