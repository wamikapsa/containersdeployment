FROM golang:1.25-bookworm as builder

WORKDIR /src

COPY go.* .
COPY main.go .

RUN go get && go build -o main main.go

FROM debian:bookworm

WORKDIR /app
COPY --from=builder /src/main .
COPY public public
COPY templates templates

ENV PORT=5000 INSTANCE_NAME="dov-bear"

EXPOSE ${PORT}

ENTRYPOINT /app/main
