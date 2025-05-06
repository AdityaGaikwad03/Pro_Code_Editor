$(document).ready(function () {
    $('#run').on('click', function () {
      const html = $('#html').val();
      const css = `<style>${$('#css').val()}</style>`;
      const js = `<script>${$('#js').val()}<\/script>`;
  
      const output = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8" />
            ${css}
          </head>
          <body>
            ${html}
            ${js}
          </body>
        </html>
      `;
  
      const iframe = document.getElementById('output');
      const doc = iframe.contentDocument || iframe.contentWindow.document;
      doc.open();
      doc.write(output);
      doc.close();
    });
  });
  