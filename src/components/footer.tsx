export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-6 border-t bg-card/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-muted-foreground">
          &copy; {currentYear} Volture Hub. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
