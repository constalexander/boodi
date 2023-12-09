"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var tts_controller_exports = {};
__export(tts_controller_exports, {
  tts: () => tts
});
module.exports = __toCommonJS(tts_controller_exports);
var import_fs = __toESM(require("fs"));
var import_path = __toESM(require("path"));
var import_openai_service = require("../services/openai.service.js");
const tts = async (req, res, next) => {
  return;
  const speechFile = import_path.default.resolve("./speech.mp3");
  async function main() {
    const mp3 = await import_openai_service.ai.audio.speech.create({
      model: "tts-1-hd",
      voice: "nova",
      input: `Welcome to our meditation and journaling circle, where we come together to cultivate kindness, compassion, and self-awareness. As we begin, take a moment to settle into a comfortable position, allowing your body to relax and your mind to become still.

      Today, we will explore the concept of the mind as a wild horse, and how we can cultivate a sense of gentleness and compassion towards our thoughts and emotions. Just like a wild horse, our minds can be unruly and unpredictable, and if we try to control them with force, we may end up getting hurt. But with patience, understanding, and love, we can train our minds to be our loyal companions and support our journey towards inner peace and happiness.
      
      So, as we move into our guided meditation, I invite you to bring a sense of curiosity and openness to your experience. Allow yourself to observe your thoughts and emotions without judgment or resistance, and let them be just as they are.
      
      As you breathe in, imagine a gentle breeze blowing through your mind, calming and soothing any racing thoughts or worries. As you breathe out, feel a sense of relaxation and ease spreading throughout your body, like a soft blanket of warmth and comfort.
      
      As you continue to breathe in this way, allow your mind to settle and become still, like a tranquil lake on a calm day. Observe any ripples or disturbances that arise, and simply let them be, without trying to change or control them.
      
      Now, bring to mind a situation or challenge that you have been struggling with lately. It could be something small or big, personal or professional. Allow yourself to feel any emotions or sensations that arise, without getting lost in the story or the drama.
      
      As you breathe in, silently repeat the mantra "gentleness". As you exhale, silently repeat the mantra "compassion". Allow these words to infuse your entire being, like a healing balm that soothes and nurtures your mind and heart.
      
      Now, imagine yourself as the rider of the wild horse that is your mind. You are not trying to control it or force it to go in a certain direction. Instead, you are approaching it with gentleness and compassion, and you are gradually building a trusting and loving relationship with it.
      
      As you move into the free writing portion of our circle, allow yourself to express whatever thoughts and emotions arise, without judgment or censorship. Write as if you were talking to a loyal friend or ally, who listens with kindness and understanding.
      
      And as we come to the sharing portion of our circle, remember that this is a safe and supportive space, where we honor each other's journeys and experiences. Allow yourself to connect with others from a place of compassion and empathy, and let your words and presence be a source of healing and inspiration.
      
      Thank you for joining us in this meditation and journaling circle, and we look forward to sharing this journey with you.`
    });
    const buffer = Buffer.from(await mp3.arrayBuffer());
    await import_fs.default.promises.writeFile(speechFile, buffer);
  }
  main();
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  tts
});
//# sourceMappingURL=tts.controller.js.map
