export class Aside {
  constructor(
    readonly $asideElement:HTMLElement
  ) {
    this.setup();
  }

  get $toggleButton():HTMLElement {
    return document.querySelector('[data-type="toggle_aside"]') as HTMLElement;
  }

  get $closeButton():HTMLElement {
    return this.$asideElement
      .querySelector('[data-type="close_aside_button"]') as HTMLElement;
  }

  get isOpen():boolean {
    return this.$asideElement.getAttribute('aria-expanded') === String(true);
  }

  private setup():void {
    this.toggle = this.toggle.bind(this);
    this.close = this.close.bind(this);

    this.$toggleButton.addEventListener('click', this.toggle);
    this.$toggleButton.addEventListener('dragstart', (event) => event.preventDefault());
    this.$closeButton.addEventListener('click', this.close);
  }

  public toggle():void {
    this.$asideElement!.ariaExpanded = this.isOpen ? String(false) : String(true);
    this.$toggleButton!.ariaExpanded = this.$asideElement!.ariaExpanded;

    this.documentClickHandler = this.documentClickHandler.bind(this);

    document.removeEventListener('click', this.documentClickHandler);

    if (this.isOpen) {
      document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') this.close();
      }, { once: true });

      setTimeout(():void => {
        document.addEventListener('click', this.documentClickHandler, { once: true })
      }, 1);
    }
  }

  public close():void {
    this.$asideElement!.ariaExpanded = String(false);
    this.$toggleButton!.ariaExpanded = this.$asideElement!.ariaExpanded;
  }

  private documentClickHandler(event):void {
    if (!((event.target as HTMLElement).closest('[data-type="menu_aside"]')) &&
        !((event.target as HTMLElement).closest('[data-type="toggle_aside"]'))) {
      return this.close();
    } 
  }
}