export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <a href="https://www.santilena.com.br">Santilena</a>
      </footer>

      <style
        dangerouslySetInnerHTML={{
          __html: `
      .footer {
        padding: 10px 0 40px;
        color: #ccc;
        font-size: 14px;
        text-align: center;
        border-top: 1px solid;
        margin-top: 50px;
      }
    `,
        }}
      />
    </div>
  )
}
