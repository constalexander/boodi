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
      ? 'https://boodi-api-eb451661b30b.herokuapp.com'
      : 'http://localhost:3000';
  }

  get BASE_WSS() {
    return import.meta.env.PROD
      ? 'wss://boodi-api-eb451661b30b.herokuapp.com'
      : 'ws://localhost:3000';
  }

  get endpoints() {
    return {
      eightfoldPathFull: '/eightfold-path/full',
      fourNobleTruths: '/four-noble-truths',
      reflection: '/reflection',
      zeroShotWisdom: '/zero-shot-wisdom',
      zeroShotWisdomQuote: '/zero-shot-wisdom/quote',
    };
  }

  get api() {
    return {
      eightfoldPathFull: `${URLService.instance.BASE_WSS}${URLService.instance.endpoints.eightfoldPathFull}`,
      fourNobleTruths: `${URLService.instance.BASE_WSS}${URLService.instance.endpoints.fourNobleTruths}`,
      reflection: `${URLService.instance.BASE_WSS}${URLService.instance.endpoints.reflection}`,
      zeroShotWisdom: `${URLService.instance.BASE_WSS}${URLService.instance.endpoints.zeroShotWisdom}`,
      zeroShotWisdomQuote: `${URLService.instance.BASE_WSS}${URLService.instance.endpoints.zeroShotWisdomQuote}`,
    };
  }
}

export default URLService;
