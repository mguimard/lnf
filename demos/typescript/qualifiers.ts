class Rectangle {
  private l = 0;
  private h = 0;

  public area() {}
}

interface PeutSauter {
  saute(): void;
}

class Chat implements PeutSauter {
  saute(): void {}
}
