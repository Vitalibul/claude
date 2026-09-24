set -e
B=$1; O=$2
node $B $O.docx && timeout 180 soffice --headless --convert-to pdf $O.docx >/dev/null 2>&1
rm -f p*.png; python3 -c "
import pymupdf as f,sys
d=f.open('$O.pdf');print('pages',d.page_count)
for i,p in enumerate(d):
  p.get_pixmap(dpi=70).save(f'p{i+1:02d}.png')
  bl=p.get_text('blocks'); maxy=max(b[3] for b in bl) if bl else 0
  print(i+1,int(maxy),(p.get_text().strip().split(chr(10))+['',''])[1][:40])
"
