import { Component, Host, h } from '@stencil/core';
import SOCIAL_MEDIA_LINKS from './social-media-links';

@Component({
  tag: 'readr-footer',
  styleUrl: 'readr-footer.scss',
  shadow: true,
})
export class ReadrFooter {
  render() {
    return (
      <Host>
        <footer>
          <div class="media-links">
            {
              Object.values(SOCIAL_MEDIA_LINKS).map(medium => {
                return (
                  <a
                    href={medium.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    innerHTML={medium.svgIcon}
                  >
                  </a>
                )
              })
            }
          </div>
          <div class="us-links">
            <a
              href="https://www.readr.tw/about"
              target="_blank"
              rel="noopener noreferrer"
            >
              關於我們
            </a>
            <a
              href="mailto:readr@readr.tw"
            >
              聯絡我們
            </a>
            <a
              href="https://www.readr.tw/privacy-rule"
              target="_blank"
              rel="noopener noreferrer"
            >
              隱私政策
            </a>
            <a
              href="https://forms.gle/C6B5MGYXLzXrmfSe6"
              target="_blank"
              rel="noopener noreferrer"
            >
              意見回饋
            </a>
          </div>
          <div class="copyright">© 2020 READr All Rights Reserved</div>
        </footer>
      </Host>
    );
  }
}
