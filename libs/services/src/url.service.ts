class URLService {
  private static instance: URLService;

  public static getInstance(): URLService {
    if (!URLService.instance) {
      URLService.instance = new URLService();
    }
    return URLService.instance;
  }

  get BASE() {
    return import.meta.env.PROD
      ? 'https://boodi-be-4611caadff9d.herokuapp.com'
      : 'http://localhost:3000';
  }

  get BASE_WSS() {
    return import.meta.env.PROD
      ? 'wss://boodi-be-4611caadff9d.herokuapp.com'
      : 'ws://localhost:3000';
  }

  get api() {
    return {
      fourNobleTruths: `${URLService.instance.BASE_WSS}/four-noble-truths`,
      eightfoldPathFull: `${URLService.instance.BASE_WSS}/eightfold-path/full`,
      zeroShotWisdom: `${URLService.instance.BASE_WSS}/zero-shot-wisdom`,
    };
  }
}

export default URLService;
